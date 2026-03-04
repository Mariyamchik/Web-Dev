import { Component, inject, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumService } from '../../services/album-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-albums-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './albums-component.html',
  styleUrls: ['./albums-component.css'],
})
// ПРОВЕРЬ: Название должно быть AlbumsComponent, а не AlbumPhotosComponent
export class AlbumsComponent implements OnInit { 
  albumService = inject(AlbumService);
  router = inject(Router);

  loading = signal(true);
  albums = signal<any[]>([]);

  ngOnInit() {
    this.albumService.getAlbums().subscribe({
      next: (data) => {
        this.albums.set(data);
        this.loading.set(false);
      },
      error: (err) => console.error(err)
    });
  }

  navigateToAlbum(id: number) {
    this.router.navigate(['/albums', id]); 
  }

  deleteAlbum(id: number, event?: Event) {
    if (event) event.stopPropagation();
    this.albums.update(albums => albums.filter(a => a.id !== id));
  }
}