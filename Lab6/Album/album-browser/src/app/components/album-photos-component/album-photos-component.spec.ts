import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AlbumPhotosComponent } from './album-photos-component';
import { provideRouter } from '@angular/router'; // Для работы маршрутизации в тестах
import { provideHttpClient } from '@angular/common/http'; // Если AlbumService использует HttpClient

describe('AlbumPhotosComponent', () => {
  let component: AlbumPhotosComponent;
  let fixture: ComponentFixture<AlbumPhotosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlbumPhotosComponent],
      providers: [
        provideRouter([]), // Настраиваем фейковый роутер
        provideHttpClient() // Настраиваем клиент для сервисов
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlbumPhotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); 
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});