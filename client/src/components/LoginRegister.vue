<template lang="html">
  <div class="container">
    <div class="row">
      <div class="col-md-6">
        <form class="form-signin">
          <h2 class="form-signin-heading">Please sign in</h2>
          <label for="inputEmail" class="sr-only">Email address</label>
          <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus>
          <br>
          <label for="inputPassword" class="sr-only">Password</label>
          <input type="password" id="inputPassword" class="form-control" placeholder="Password" required>
          <br>
          <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
        </form>
        <br>
        <form class="form-signin">
          <h2 class="form-signin-heading">Or Register</h2>
          <label for="inputUsername" class="sr-only">Username</label>
          <input type="text" id="inputUsername" class="form-control" placeholder="Username" required>
          <br>
          <label for="inputEmail" class="sr-only">Email address</label>
          <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus>
          <br>
          <label for="inputPassword" class="sr-only">Password</label>
          <input type="password" id="inputPassword" class="form-control" placeholder="Password" required>
          <br>
          <button class="btn btn-lg btn-primary btn-block" type="submit">Register</button>
        </form>
        <br>
      </div>
    </div>

    </div>
</template>

<script>
export default {
  name: 'LoginRegister'
}
</script>

<style lang="css">
</style>
