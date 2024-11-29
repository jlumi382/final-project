document.addEventListener("DOMContentLoaded", function() {
    const logoutConfirmationDialog = document.getElementById(
        "logoutConfirmationDialog",
    );

    if (logoutConfirmationDialog) {
        const confirmRedirect = document.getElementById("confirmRedirect");
        const cancelRedirect = document.getElementById("cancelRedirect");

        if (confirmRedirect) {
            confirmRedirect.addEventListener("click", () => {
                window.location.href = "./../include/logout.php";
            });
        }

        if (cancelRedirect) {
            cancelRedirect.addEventListener("click", () => {
                logoutConfirmationDialog.close();
            });
        }
    }
});
