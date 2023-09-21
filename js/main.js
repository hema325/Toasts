
const toastDefaults = {
    success: {
        message: 'Successfull operation',
        icon: '<i class="fa-solid fa-check"></i>'
    },
    warning: {
        message: 'Operation may faill!"',
        icon: '<i class="fa-solid fa-exclamation"></i>'
    },
    danger: {
        message: 'Failed to update your items!',
        icon: '<i class="fa-solid fa-xmark"></i>'
    },
    duration: 8000
}

let toastsWrapper = $(`<div class="alerts-wrapper"></div>`);
toastsWrapper.appendTo($("body"));

function removeToast(toast) {
    toast.addClass("hide");
    setTimeout(() => toast.remove(), 600);
}

function toast({ type, message, icon }) {

    let toast = $('<div class="alert"></div>"');

    if (type == "success") {
        toast.addClass("alert-success");

        if (message == null)
            message = toastDefaults.success.message;

        if (icon == null)
            icon = toastDefaults.success.icon;

        toast.append(icon + message);
    }
    else if (type == "warning") {
        toast.addClass("alert-warning");

        if (message == null)
            message = toastDefaults.warning.message;

        if (icon == null)
            icon = toastDefaults.warning.icon;

        toast.append(icon + message);
    }
    else if (type == "danger") {
        toast.addClass("alert-danger");

        if (message == null)
            message = toastDefaults.danger.message;

        if (icon == null)
            icon = toastDefaults.danger.icon;

        toast.append(icon + message);
    }

    let removeInterval = setTimeout(function () {
        removeToast(toast);
    }, toastDefaults.duration);

    $('<i class="fa-solid fa-xmark close"></i>').appendTo(toast).click(() => {
        clearInterval(removeInterval);

        setTimeout(function () {
            removeToast(toast);
        }, 600);

        toast.addClass("hide");
    })

    toastsWrapper.prepend(toast);
}


$(".btn-success").click(function () {
    toast({ type: "success", message: "Your operation has done successfully!" });
})

$(".btn-warning").click(function () {
    toast({ type: "warning", message: "operation may faill!" });
})

$(".btn-danger").click(function () {
    toast({ type: "danger", message: "failed to update your items!" });
})