# Demo of skeleton loading UI with shimmer animation
## Getting started
There are two directories to run this project - server and client
1. To run the app. Go to the root folder and run <br />
    ```npm run start```
   
2. Go to http://localhost:3000 to run the app
   
There are 2 examples in App.js file. Uncomment the below code one by one and run the app. <br>
1. - ```<FetchNewsCard />```  <br>
2. - ```<FetchNewsCards />```  <br>

## How to use the skeleton component
1. You need to wrap your UI around "withSkeleton" function under "./lib/SkeletonLoader.jsx". <br><br>
   ```withSkeleton(<NewsCard item={news[i]} />, isLoading, skeletonProps)```<br><br>
       - Param 1 - the component you want to show. <br>
       - Param 2 - a boolean "isLoading" to indicate when the API results comes. Set it to true initially and false when API response is received. <br>
       - Param 3 - the props (explained below) you need to provide to design the skeleton UI. <br>
       
2. Before talking about skeleton props, let us define what a shape object is in the Skeleton UI. It is just an object with a parameters - shape, width and height. <br>
   Supported shapes currently are - rectangle and line. <br>
   Example <br>
    ```
    {
      shape: "rectangle",
      height: "200px",
      width: "200px"
    }
    ```

4. The skeleton props define what the UI of the skeleton will look like. It has following properties. <br>
    - type (e.g. "card")
    - width
    - height
    - children - a list of items that represent rows in the skeleton UI.  <br><br>
  Each row can be a shape object or a list of nested shape objects. More complex UI can be created by further nesting a list of shape objects inside the props.
Example props <br>
```
{
        type: "card",
        width: "500px",
        height: "400px",
        children: [
          {
            shape: "rectangle",
            height: "220px",
          },
          {
            shape: "line",
            width: "10%",
          },
          {
            shape: "line",
          },
          {
            shape: "line",
          },
          [
            { shape: "line", width: "30%", height: "10px" },
            { shape: "line", width: "30%", height: "10px" },
          ]
        ]
}
```
   

## Loading one card
![](https://github.com/pankaj6apr/skeleton/blob/main/Skeleton2.gif)

## Loading a list of cards
![](https://github.com/pankaj6apr/skeleton/blob/main/Skeleton1.gif)

## License

Copyright (c) 2023 Pankaj Kumar

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
