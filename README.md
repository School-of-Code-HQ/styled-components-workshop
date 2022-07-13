# Extra Workshop: styled-components

Hey this is an extra workshop for you to practice our beloved styled-components!
The goal is to create an online CV, but styling it with this library.

Have fun building your CV, it can either be for yourself or an imaginary character, the point is experimenting and enjoying the journey

Here are the docs if needed (which you probably will) => [Link](https://styled-components.com/docs)

## Step 1

Install the library in your application

```sh
npm i styled-components
```

## Step 2

- Search for CVs designs and choose one to be your inspiration:

E.g.:
![cv](https://i.etsystatic.com/12366970/r/il/9fe5aa/2773445526/il_1588xN.2773445526_eq6o.jpg)

- Think about what components you will reuse, atribbutes/props that will change within the same component.

- Every component you create, style them individually and reuse them across your CV page.

Here are some examples of reusable components:

```jsx
<Header/>
<Image/>
<Button/>
<Link/>
<Text/>
<Container/>
<Section/>
<Title/>
```

## Step 3

Create and style your first component. In the previous image, for example, I would create a Component for `<Title/>`, and create props that would change the children/text, colour, bg and size.

## Step 4: Optional

Deploy and share the link, I would love to see what you built.
