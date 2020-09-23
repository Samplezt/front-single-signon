<template>
    <div class="container">
        <div class="row">
            <div class="center-block">
                <div class="error-block">
                     <p><b>Ocurrio un error al ingresar al sistema, intente nuevamente.</b></p>
                     <p>Error: {{$route.query.ERROR}}</p>
                    <li>
                    <router-link to="/">
                        <b-button variant="outline-info" class="mb-2 error-color">
                            <b-icon icon="power" aria-hidden="true"></b-icon> Login
                        </b-button>
                    </router-link>
                    </li>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .error-color:hover {
        background-color: #1ab188;
    }
    .error-color{
        color: white;
    }
    ul {
    margin: 0;
    padding: 0;
    }
    li {
    display: inline-block;
    padding: 1em 0.5em;
    }
    .error-block {
        background: #1ab188;
        border: none;
        color: #1ab188;
        margin-top: 2rem;
        margin-left: 25rem;
        padding: 1rem 0;
        cursor: pointer;
        transition: background 0.2s;
        flex-direction: column;
        justify-content: center;
        width: 20%;
        min-width: 350px;
        max-width: 100%;
        background: rgba(19, 35, 47, 0.9);
        border-radius: 5px;
        padding: 40px;
        box-shadow: 0 4px 10px 4px rgba(0, 0, 0, 0.3);
    }
</style>