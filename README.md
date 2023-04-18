# promiseWithTimeout
Reject a promise early with timeout. In this example the promise will be rejected if the API doesn't return respose within 180ms.

```
const fetchProduct = fetch('https://fakestoreapi.com/products/1').then(res => res.json());
const productPromise = new PromiseWithTimeOut<string>(fetchProduct, 180);

(async (){
  try{
    const r = await productPromise;
    console.log({r});
  }catch(err){
    console.log('err', err)
  }
})()
```
