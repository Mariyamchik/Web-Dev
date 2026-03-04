// src/app/models/album.model.ts
export interface Album {    
  userId: number; 
  id: number;
  title: string;
  artist: string; // обязательно, чтобы шаблон работал
}