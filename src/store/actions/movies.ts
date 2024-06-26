import { createAsyncThunk } from "@reduxjs/toolkit";
import { API_KEY, API_URL } from "utils/constants";
import { moviesResponseSchema } from "utils/schemas/movies.schema";

const OPTIONS = { method: "GET", headers: { accept: "application/json" } };

type TAllMoviesParams = {
  page?: string;
  year?: string;
};

export const getAllMovies = createAsyncThunk(
  "movies/getAllMovies",
  async ({ page = "1", year = "" }: TAllMoviesParams) => {
    const response = await fetch(
      `${API_URL}/discover/movie?api_key=${API_KEY}&language=es-ES&page=${page}&year=${year}`,
      OPTIONS
    );
    const data = await response.json();
    return moviesResponseSchema.parse(data);
  }
);

type TSearchMovieParams = {
  query: string;
  page?: string;
  year?: string;
};

export const getSearchMovie = createAsyncThunk(
  "movies/getSearchMovie",
  async ({ query = "", page = "1", year = "" }: TSearchMovieParams) => {
    const response = await fetch(
      `${API_URL}/search/movie?api_key=${API_KEY}&language=es-ES&query=${query}&page=${page}&year=${year}`,
      OPTIONS
    );
    const data = await response.json();
    return moviesResponseSchema.parse(data);
  }
);
