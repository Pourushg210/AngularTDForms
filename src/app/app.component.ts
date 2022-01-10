import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('form') formChild:NgForm;
  defaultQuestion = 'pet';
  answer = '';
  genders = ['male','female'];
  user = {
    userName:'',
    email:'',
    secretQuestion:'',
    answer:'',
    gender:''
  }

  suggestUserName() {
    const suggestedName = 'Superuser';
    // this.formChild.setValue({
    //   userdata:{
    //     username:'suggestedName',
    //     email:'pourush@gmail.com'
    //   },
    //   secret:'pet',
    //   questionAnswer:'',
    //   gender:'male'
    // });

    this.formChild.form.patchValue({
      userdata:{
        username:suggestedName
      }
    })
  }

  // With local reference
  // onSubmit(form: NgForm) {
  //   console.log(form);
  // }

  // with viewchild
  onSubmit() {
    this.user.userName = this.formChild.value.userdata.username;
    this.user.email = this.formChild.value.userdata.email;
    this.user.secretQuestion = this.formChild.value.secret;
    this.user.answer = this.formChild.value.questionAnswer;
    this.user.gender = this.formChild.value.gender;
    this.formChild.reset();
  }

}
