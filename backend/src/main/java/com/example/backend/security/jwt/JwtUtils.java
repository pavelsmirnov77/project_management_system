package com.example.backend.security.jwt;

import io.jsonwebtoken.*;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Component;
import com.example.backend.security.services.UserDetailsImpl;

import java.security.Key;
import java.util.Date;

@Component
public class JwtUtils {

    @Value("${jwt.app.jwtSecret}")
    private String jwtSecret;

    @Value("${jwt.app.jwtExpirationMs}")
    private int jwtExpirationMs;

    public String generateJwtToken(Authentication authentication) {
        UserDetailsImpl userPrincipal = (UserDetailsImpl) authentication.getPrincipal();

        return Jwts.builder()
                .setSubject((userPrincipal.getLogin()))
                .setIssuedAt(new Date())
                .setExpiration(new Date((new Date()).getTime() + jwtExpirationMs))
                .signWith(key(), SignatureAlgorithm.HS256)
                .compact();
    }

    private Key key() {
        return Keys.hmacShaKeyFor(Decoders.BASE64.decode(jwtSecret));
    }

    public String getUserNameFromJwtToken(String token) {
        return Jwts.parserBuilder()
                .setSigningKey(key())
                .build()
                .parseClaimsJws(token)
                .getBody()
                .getSubject();
    }

    public void validateJwtToken(String authToken) {

        if (authToken == null) {
            throw new BadCredentialsException("Не передан JWT-токен");
        }
        try {
            Jwts.parserBuilder().setSigningKey(key()).build().parse(authToken);
        } catch (MalformedJwtException e) {
            throw new BadCredentialsException("Недопустимый JWT-токен", e);
        } catch (ExpiredJwtException e) {
            throw new BadCredentialsException("Срок действия JWT-токена истек", e);
        } catch (UnsupportedJwtException e) {
            throw new BadCredentialsException("JWT-токен не поддерживается", e);
        } catch (IllegalArgumentException e) {
            throw new BadCredentialsException("Пустая строка у JWT-токена", e);
        }
    }
}
