import path from 'path';
// Components can be defined as simple Classes. We'll cover methods later on.
// Right now, we're just going to keep it empty.
export class HelloWorld {
    name:string;
    view:string
}

// `name` helps us reference the component in our template. With this name, we
// can do in our HTML:
//
// <view is="hello-world"/>
//
// And this component will show up!
HelloWorld.prototype.name = 'hello-world';

// `view` tells Derby where the template for this component lives
HelloWorld.prototype.view = path.join(__dirname, '..', '..' ,'views', 'components', 'HelloWorld');

// That ends `Hello World`! You are now ready for the next section of the
// tutorial.

// Next part: https://github.com/lever/derby-tutorial#racer-basics