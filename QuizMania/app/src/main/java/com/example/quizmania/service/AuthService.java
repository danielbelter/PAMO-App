package com.example.quizmania.service;

import com.example.quizmania.model.payload.LoginPayload;
import com.example.quizmania.model.payload.RegisterPayload;

import retrofit2.Call;
import retrofit2.http.Body;
import retrofit2.http.POST;

/**
 * Interface with api auth calls
 */
public interface AuthService {
    @POST("/api/auth/signin")
    Call<LoginPayload> login(@Body LoginPayload loginPayload);

    @POST("/api/auth/signup")
    Call<RegisterPayload> register(@Body RegisterPayload registerPayload);
}