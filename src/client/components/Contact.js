import React from "react";

const Contact = props => {
    return (
        <form id="form-contact" class="row" method="POST">
            <input
                class="col-12 col-md-6 col-lg-6 form-control"
                type="text"
                name="lastName"
                placeholder="Votre nom de famille"
                required
            />
            <input
                class="col-12 col-md-6 offset-lg-1 col-lg-5 form-control"
                type="text"
                name="firstName"
                placeholder="Votre prénom"
                required
            />
            <input
                class="col-12 col-md-6 col-lg-6 form-control"
                type="email"
                name="email"
                placeholder="Adresse email"
                required
            />
            <input
                class="col-12 col-md-6 offset-lg-1 col-lg-5 form-control"
                type="text"
                name="phoneNumber"
                placeholder="Numéro de téléphone"
                required
            />
            <input
                class="col-12 col-lg-12 form-control"
                type="text"
                name="adress"
                placeholder="Adresse complète (rue, numéro, code postal, localité)"
                required
            />
            <input
                class="col-12 col-md-6 col-lg-6 form-control"
                type="text"
                name="subject"
                placeholder="Sujet"
                required
            />
            <textarea
                class="col-12 form-control"
                placeholder="Votre message"
                rows="6"
                name="message"
                form="form-contact"
                required
            />
            <div
                class="g-recaptcha col-12"
                data-sitekey="6LdJfWkUAAAAABaW2tfDgl7hZdr8QHIKnn5mW_Rl"
            />
            <input
                id="submit"
                class="btn btn-primary col-12 col-md-5 form-control"
                type="submit"
                value="Envoyer"
                style="background-color: #375D81;color: white;"
            />
            <input
                class="btn btn-primary col-12 offset-md-2 col-md-5 form-control"
                type="reset"
                value="Annuler"
                style="background-color: #375D81;color: white;"
            />
        </form>
    );
};

export default Contact;
