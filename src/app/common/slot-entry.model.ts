export class SlotEntry {
  constructor(public name: string,
              public data: string = "",
              public url: string = "",
              public value: string = "",
              public selected: boolean = false,
              public position: number = 0
  ){}
}
