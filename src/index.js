import {
    Component,
    myReact
} from '../myReact'

class MyComponent extends Component {
    render() {
       return (
           <div>
               <span>
                   hello
               </span>
               <span>
                   world
               </span>
           </div>

       )
    }
}

let a = <MyComponent name="a" id="ida"></MyComponent>

myReact.render(
    a,
    document.getElementById("app")
)