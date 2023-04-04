export const sampleInputJsonData = {
  "firstName": "A",
  "lastName": "A1",
  "childs": [
    {
      "firstName": "B1",
      "lastName": "B2",
      "childs": [
      ]
    },
    {
      "firstName": "C1",
      "lastName": "C2",
      "childs": [
      ]
    }
  ]
}

export const sampleOutputData = {
  "label": "A A1",
  "items": [
    {
      "label": "B1 B2",
      "items": [
      ]
    },
    {
      "label": "C1 C2",
      "items": [
      ]
    }
  ]
}

export interface inputJSON {
  firstName: string;
  lastName: string;
  childs: inputJSON[] | [];
}

export interface outputJSON {
  label: string;
  items: outputJSON[] | [];
}
