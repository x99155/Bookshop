import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-livre',
  templateUrl: './create-livre.component.html',
  styleUrl: './create-livre.component.css'
})
export class CreateLivreComponent {

  form: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      name:['', Validators.required],
      shortDescription:['', Validators.required],
      price:['', Validators.required],
      nbStar:['', Validators.required],
      category:[''],
      urlImg:['', Validators.required]
    });
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
  }
}
