import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  // ОБЯЗАТЕЛЬНО добавь эти три импорта сюда:
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App { // Обрати внимание на имя класса, на скриншоте у тебя App
  title = 'album-browser';
}