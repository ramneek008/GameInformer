import { Component, OnInit, ElementRef, EventEmitter ,Output, ViewChild} from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
	@ViewChild('inputName',{static:false}) nameInput:ElementRef;
	@ViewChild('inputAmount',{static:false}) amountInput:ElementRef;
	@Output() ingredientAdded = new EventEmitter<Ingredient>();
  constructor() { }

  ngOnInit() {
  }
  onAddItem()
  {
  	const name = this.nameInput.nativeElement.value;
  	const amount = this.amountInput.nativeElement.value;
  	const newIngredient = new Ingredient(name,amount*240);
	this.ingredientAdded.emit(newIngredient);
  }
}
