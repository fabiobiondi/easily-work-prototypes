import {Component, ElementRef, Input, OnInit, ViewChild} from "@angular/core";

@Component({
// tslint:disable-next-line:component-selector
  selector: 'fb-trix-editor',
  template: `
    <form>
      <input [id]="index" type="hidden" name="content" #input>
      <trix-editor #trixEditor class="trix-content" [attr.input]="index"></trix-editor>
    </form>

    <button (click)="save()">Save</button>

    <hr>
    output: <br>

    <pre>{{output | json}}</pre>


    <div [innerHTML]="output"></div>
  `
})
export class TrixComponent  {
  @ViewChild('trixEditor', { static: true}) trixEditor!: any;
  @ViewChild('input', { static: true}) input!: ElementRef;
  @Input() index!: string;

  output: string = '';

  /**
   * Init Editor
   */
  ngAfterViewInit() {
    const editor = this.trixEditor.nativeElement.editor

    // wait for upload file events
    this.trixEditor.nativeElement.addEventListener('trix-attachment-add', (event: any) => {
      if (event.attachment.file) {
        console.log(event);
      }
    });

    // populate editor with some content
    editor.insertHTML("<strong>Hello</strong>")
    console.log(this.input.nativeElement.value)
    setTimeout(() => {
      this.printOutput();
    })
  }

  /**
   * Save content
   * PROBLEM: don't get images
   * See this example for upload: https://trix-editor.org/js/attachments.js
   */
  save() {
    const editor = this.trixEditor.nativeElement.editor
    console.log(editor.getDocument())
    console.log(editor.getDocument().toString())
    console.log(this.input.nativeElement.value)
    this.printOutput();
  }

  printOutput() {
    this.output = this.input.nativeElement.value;
  }
}
