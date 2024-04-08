<template>
  <div class="store section">
    <h1 class="text-center">Shop</h1>
    <div class="store-items">
      <div class="card">
        <img class="img-fluid" src="../assets/img/shirtFront.jpeg" alt="Front of T-Shirt">
        <div class="card-body">
          <div class="card-title">The Lee Sisters T-Shirts | <span class="card-price">$15</span></div>
          <!--Paypal button form goes here-->
          <form target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post">
            <input type="hidden" name="cmd" value="_s-xclick">
            <input type="hidden" name="hosted_button_id" value="TMNCENJN5TUZC">
            <table>
              <tr>
                <td><input class="form-control" type="hidden" name="on0" value="Sizes">Sizes</td>
              </tr>
              <tr>
                <td><select class="form-control" name="os0">
                    <option value="Small">Small $15.00 USD</option>
                    <option value="Medium">Medium $15.00 USD</option>
                    <option value="Large">Large $15.00 USD</option>
                    <option value="X-Large">X-Large $17.00 USD</option>
                    <option value="XX-Large">XX-Large $17.00 USD</option>
                  </select> </td>
              </tr>
            </table>
            <input type="hidden" name="currency_code" value="USD">
            <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_cart_LG.gif" border="0" name="submit"
              alt="PayPal - The safer, easier way to pay online!">
            <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
          </form>
        </div>
      </div>
      <div class="card">
        <img class="img-fluid" src="../assets/img/ukeShoesCD.jpg" alt="CD">
        <div class="card-body">
          <div class="card-title">Uke Shoes EP Album | <span class="card-price">$10</span></div>
          <!--Paypal button form goes here-->
          <form target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post">
            <input type="hidden" name="cmd" value="_s-xclick">
            <input type="hidden" name="hosted_button_id" value="CNAZEKQGVCTSY">
            <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_cart_LG.gif" border="0" name="submit"
              alt="PayPal - The safer, easier way to pay online!">
            <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.store-items {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.card {
  display: flex;
  flex-direction: column;
  width: 45%;
  margin: 15px;
}

.card-body {
  opacity: 85%;
}

.card-title {
  font-size: 18px;
  opacity: 85%;
  margin-top: 10px;
}

.card-price {
  font-size: 15px;
}
</style>
