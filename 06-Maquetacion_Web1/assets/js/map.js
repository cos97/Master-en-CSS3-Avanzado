document.addEventListener("DOMContentLoaded", (event) => {


    setTimeout(() => {
        document.querySelector("#load-iframe-map").innerHTML = ` 
        <iframe class="contact__iframe" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6398.7931511708075!2d-4.44811985073403!3d36.68900708155214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd72f9d342ac8de1%3A0x2782db107a622121!2sPlaya%20de%20la%20Misericordia!5e0!3m2!1ses!2ses!4v1691001195959!5m2!1ses!2ses"></iframe>`;
    }, 500);
    
});