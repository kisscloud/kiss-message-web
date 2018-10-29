import toast from "izitoast";

export default function () {

  let redirect = false

  if (!localStorage.getItem("accessToken")) {
    redirect = true;
  }

  let expiredAt = localStorage.getItem('accessTokenExpiredAt');

  if (!expiredAt) {
    redirect = true;
  }

  let now = (new Date()).valueOf();

  if (now > expiredAt) {
    redirect = true;
  }

  let target = window.config.ACCOUNT_CENTER_HOST;

  if (redirect) {
    if (window.location.href.indexOf('/auth/') === -1) {
      toast.info({
        message: '请重新登录',
        position: 'topRight',
        class: 'globleToast'
      });
      window.location.href = target;
    }
  }
}
