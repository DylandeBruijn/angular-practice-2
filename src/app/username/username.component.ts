import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-username",
  templateUrl: "./username.component.html",
  styleUrls: ["./username.component.css"],
})
export class UsernameComponent implements OnInit {
  userName = "";

  onSubmit() {
    this.userName = "";
  }

  constructor() {}

  ngOnInit(): void {}
}
