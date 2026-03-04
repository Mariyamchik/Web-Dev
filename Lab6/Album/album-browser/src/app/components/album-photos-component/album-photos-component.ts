// src/app/components/album-photos-component/album-photos-component.ts
import { Component, inject, signal, OnInit, Input } from '@angular/core';
import { CommonModule, Location, NgFor } from '@angular/common';
import { AlbumService } from '../../services/album-service';
import { Photo } from '../../models/album.model'; // ✅ берём из модели

@Component({
  selector: 'app-album-photos-component',
  standalone: true,
  imports: [CommonModule, NgFor],
  templateUrl: './album-photos-component.html',
  styleUrls: ['./album-photos-component.css'],
})
export class AlbumPhotosComponent implements OnInit {
  albumService = inject(AlbumService);
  location = inject(Location);

  @Input() albumId!: number;

  loading = signal(true);
  photos = signal<Photo[]>([]);

  ngOnInit() {
    if (this.albumId) {
      this.albumService.getAlbumPhotos(this.albumId).subscribe({
        next: data => {
          this.photos.set(data);
          this.loading.set(false);
        },
        error: err => console.error(err)
      });
    }
  }

  goBack() {
    this.location.back();
  }
}