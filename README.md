# promiseWithTimeout
Reject a promise early with timeout. In this example the promise will be rejected if the API doesn't return respose within 280ms.

```
const fetchProduct = fetch('https://fakestoreapi.com/products/1').then(res => res.json());

(async (){
  try{
    const products = await new PromiseWithTimeOut<string>(fetchProduct, 280);
    console.log({ products });
  }catch(err){
    console.log('err', err)
  }
})()
```
