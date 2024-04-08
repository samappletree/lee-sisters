<template>
  <div class="contact section">
    <h1 class="text-center">Contact Us</h1>
    <div id="contact-form">
      <div id="contact-email" class="text-center">
        <p>For booking, press, and all other inquiries, please email:</p>
        <a href="mailto:ukulise@gmail.com" target="_blank">ukulise@gmail.com</a>
      </div>
      <!-- <form role="form" action="https://formspree.io/ukulise@gmail.com" method="POST">

        <div class="form-group">
          <label>Name</label>
          <input class="form-control" id="name" type="text" name="name" required
            data-validation-required-message="Please enter your name.">
          <p class="help-block text-danger"></p>
        </div>
        <div class="form-group">
          <label>Email Address</label>
          <input class="form-control" id="email" name="email" type="email" required
            data-validation-required-message="Please enter your email address.">
          <p class="help-block text-danger"></p>
        </div>
        <div class="form-group">
          <label>Subject</label>
          <input class="form-control" id="subject" name="subject" type="text" required
            data-validation-required-message="Please enter a subject.">
          <p class="help-block text-danger"></p>
        </div>

        <div class="form-group ">
          <label>Message</label>
          <textarea class="form-control" id="message" rows="5" name="message" required
            data-validation-required-message="Please enter a message."></textarea>
          <p class="help-block text-danger"></p>
        </div>


        <div class="form-group">
          <button type="submit" class="formbtn" value="Send">SEND</button>
        </div>
      </form> -->
    </div>
  </div>
</template>

<style scoped>
#contact-form {
  display: flex;
  justify-content: center;
  min-height: 600px;
}

#contact-email {
  padding: 30px 0;
  font-size: 18px;
}

#contact-email p {
   opacity: 80%;
}

#contact-email a {
  opacity: 1;
  color: white;
}

.form-group {
  padding: 15px 0;
  min-width: 500px;
}

.form-group label {
  position: relative;
  z-index: 0;
  display: block;
  margin: 0;
  opacity: 85%;
  top: 0;
  font-size: 18px;
}

.form-group input,
.form-group textarea {
  background: transparent;
  border: none;
  outline: none;
  border-bottom: 1px solid #e0e0e0;
  color: white;
  resize: none;
  line-height: 1.5;
  font-size: 15px;
}

.form-control {
  width: 100%;
  display: block;
}

.form-group button {
  background-color: transparent;
  border: 2px solid White;
  color: white;
  padding: 10px 30px;
  transition: 0.1s background-color linear, 0.1s color linear;
  font-size: 15px;
  letter-spacing: 2px;
}

.form-group button:hover {
  background-color: #fff;
  color: #1d1d1d;
}
</style>
