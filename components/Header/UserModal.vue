<template>
    <div class="modal fade" tabindex="-1" id="userModal" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-body">
            <button type="button" class="close" data-bs-dismiss="modal" style="outline-style:none;" aria-label="Close">
              <span>x</span>
            </button>
            <form class="px-3 py-2">
              <div class="form-group">
                <label for="exampleDropdownFormEmail1">Email address</label>
                <input type="email" class="form-control" placeholder="email~example.com">
              </div>
              <div class="form-group">
                <label for="exampleDropdownFormPassword1">Password</label>
                <input type="password" class="form-control" placeholder="Password">
              </div>
              <div class="form-check">
                <input type="checkbox" class="form-check-input">
                <label class="form-check-label" for="dropdownCheck">
                    Remember me
                  </label>
              </div>
              <button type="submit" class="btn-xl btn-success mt-3">Sign in</button>
            </form>
          </div>
          <div class="modal-footer">
            <a class="dropdown-item" href="#">Forgot password?</a>
            <a class="dropdown-item text-right" href="#">Sign up</a>
          </div>
        </div>
      </div>
    </div>
</template>