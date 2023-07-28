import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public mi_valor = true;

  constructor(
    private router: Router,
    private actRoute: ActivatedRoute
  ) {
  }

  ngOnInit() {
    // nothing to do
  }

  navigate() {
    this.router.navigate(['../', 'login'], { relativeTo: this.actRoute });
  }

  public do_something(event: Event) {

    console.log(event)

    console.log("Something")

  }

}
