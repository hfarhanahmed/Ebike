# Test Guide

## Table of Contents
1. [Framework](#framework)
2. [React Component](#react-component)
    1. [Baseline Rules](#baseline-rules)
3. [Function Library / Util Class](#function-library--util-class)
4. [Credit](#credit)

## Framework
- [Jest](https://jestjs.io/en/) 
- [React Test Renderer](https://reactjs.org/docs/test-renderer.html)

## React Component
- Use `React Test Renderer` to render component for assertion
```javascript
const testRenderer = TestRenderer.create(<Button />);
```
- Get root `test instance` for assertion
- Can be used to find other test instance deeper below the view hierarchy
```javascript
const testInstance = testRenderer.root;
```
- Find component for assertion
```javascript
const button = testInstance.findByType(Button);
```
```javascript
const text = testInstance.findByType(Text);
```
- Use Jest to do assertion on component
```javascript
expect(button.props.disabled).toBeTruthy();
```

### Baseline rules
`DO` use `React Test Renderer` provided function to find component
```javascript
const buttonContainer = testInstance.findByType(View);
const button = buttonContainer.findByType(Button);
```
```javascript
const button = testInstance.findByProps({children: 'Continue'})
```
```javascript
const button = testInstance.find((component)=>{
    if(component.type !== Text){
      return false
    }
    const disabled = component.props.disabled;
    const text = component.props.children;
    return disabled && text === 'Save';
})
```
`DON'T` use index to find child
```javascript
const buttonContainer = testInstance.findByType(View);
const button = buttonContainer.props.children[0];
```
```javascript
const buttons = testInstance.findAllByType(Button);
const button = buttons[1];
```
`DO` create variable & provide meaningful name to it to have a clearer view in terms of testing flow
```javascript
const button = testInstance.findByType(Button);
const buttonStyle = button.props.style;
expect(buttonStyle.margin).toBe(1);
``` 
`DON'T` skip variable creation
```javascript
expect(testInstance.findByType(Button).props.style.margin).toBe(1);
```
`DO` Testing Component's style if it's affected by conditional statement (if else)
```javascript
<Button
    style={{
      padding: 16,
      backgroundColor: disabled ? 'white' : 'black',
      flexDirection: 'row'
    }}
/>
```
```javascript
const testRenderer = TestRenderer.create(<Button/>);
const testInstance = testRenderer.root;
const button = testInstance.findByType(Button);
const buttonStyle = button.props.style;
expect(buttonStyle.backgroundColor).toBe('#FFFFFF');
``` 
`DON'T` Testing Component's default style
```javascript
<Button
    style={{
      padding: 16,
      backgroundColor: 'black',
      flexDirection: 'row'
    }}
/>
```
```javascript
const testRenderer = TestRenderer.create(<Button/>);
const testInstance = testRenderer.root;
const button = testInstance.findByType(Button);
const buttonStyle = button.props.style;
expect(buttonStyle.padding).toBe(16);
expect(buttonStyle.backgroundColor).toBe('#000000');
expect(buttonStyle.flexDirection).toBe('row');
```

##### `DO` provide meaningful name to test suite
#### Alert / Dialog
```javascript
test('dismiss',()=>{})
```
```javascript
describe('2 buttons',()=>{
  test('stacking',()=>{
  
  });
  test('not stacking',()=>{
  
  });
})
```

#### Button
```javascript
test('disabled',()=>{})
```
```javascript
test('icon only',()=>{})
```
```javascript
test('text and icon',()=>{})
```

#### Menu / Dropdown
```javascript
describe('menu animation', ()=>{
    test('upwards',()=>{
    
    });
    test('downwards',()=>{
    
    });
})
```

#### Validation
```javascript
describe('email', ()=>{
    test('valid', ()=>{
    
    });
    test('invalid', ()=>{
    
    })
});

describe('password', ()=>{
    test('valid', ()=>{
    
    });
    test('invalid', ()=>{
    
    });
    test('matched', ()=>{
    
    });
    test('not matched', ()=>{
    
    });
})
```

##### `DON'T` use generic test suite name
- properly / correctly sounds vague as there's no clear definition what is being tested
```javascript
test('Should render ${ComponentName} correctly', ()=>{});
```
```javascript
test('Should render multiple ${ComponentName} properly', ()=>{});
```

## Function Library / Util class
Test name guidelines
- [DO](#do-provide-meaningful-name-to-test-suite)
- [DON'T](#dont-generic-test-suite-name)

**[⬆ back to top](#table-of-contents)**

---
## Credit
- Bilal Sattar
