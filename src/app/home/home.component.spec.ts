import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { sampleInputJsonData, sampleOutputData } from './home.constant';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set isConverterOnc as true if toggleConverter is called with prior value is false', () => {
    component.isConverterOn = false;
    component.toggleConverter();
    expect(component.isConverterOn).toBeTruthy();
  })

  it('should get outputData as expected when given correct input in json format', () => {
    component.inputData = sampleInputJsonData;
    component.convertData();
    expect(component.outputData).toEqual(sampleOutputData);
  })

  it('should convert child data into items data when getChilds is called', () => {
    let outputItems = component.getChilds(sampleInputJsonData.childs);
    expect(outputItems).toEqual(sampleOutputData.items);
  })

  it('should clear output when input is changed or clicked', () => {
    component.output = 'sampleOutPut';
    component.clearOutput();
    expect(component.output).toBe('');
  })

  it('should throw an error if checkInput is called without json format input', () => {
    let mockEvent = { target: { value: { "sampleInput": "sampleInput" } } };
    component.isError = false;
    component.checkInput(mockEvent);
    expect(component.isError).toBeTruthy();
  })

  it('should parse an input if checkInput is called with proper json format input', () => {
    let mockEvent = { target: { value: JSON.stringify(sampleInputJsonData) } };
    component.checkInput(mockEvent);
    expect(component.isError).toBeFalsy();
  })

});
