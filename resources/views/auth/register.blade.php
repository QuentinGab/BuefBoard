@extends('layouts.app')

@section('content')
<div class="hero is-primary is-fullheight">
    <div class="hero-body is-columns">
        <div class="columns">
            <div class="column is-6"></div>
            <div class="column is-6 has-background-white has-text-dark">
                <div class="section">
                    <h1 class="title has-text-dark">Register</h1>
                    <form method="POST" action="{{ route('register') }}">
                        @csrf
                        <div class="field is-grouped">
                            <div class="field is-expanded">
                                <label for="first_name" class="label">{{ __('First Name') }}</label>
                                <div class="control">
                                    <input id="first_name" class="input @error('first_name') is-danger @enderror"
                                        type="name" name="first_name" placeholder="Platon"
                                        value="{{ old('first_name') }}" required
                                        autocomplete="first_name" autofocus>
                                </div>
                                @error('name')
                                    <p class="help is-danger"><strong>{{ $message }}</strong></p>
                                @enderror
                            </div>

                            <div class="field is-expanded">
                                <label for="last_name" class="label">{{ __('Last Name') }}</label>
                                <div class="control">
                                    <input id="last_name" class="input @error('last_name') is-danger @enderror"
                                        type="name" name="last_name" placeholder="Platon"
                                        value="{{ old('last_name') }}" required
                                        autocomplete="last_name" autofocus>

                                </div>
                                @error('last_name')
                                    <p class="help is-danger"><strong>{{ $message }}</strong></p>
                                @enderror
                            </div>
                        </div>


                        <div class="field">
                            <label for="email" class="label">{{ __('E-Mail Address') }}</label>
                            <div class="control">
                                <input id="email" class="input @error('email') is-danger @enderror" type="email"
                                    name="email" placeholder="platon@gmail.com"
                                    value="{{ old('email') }}" required autocomplete="email">

                            </div>
                            @error('email')
                                <p class="help is-danger"><strong>{{ $message }}</strong></p>
                            @enderror
                        </div>

                        <div class="field is-grouped">
                            <div class="field is-expanded">
                                <label class="label" for="password">{{ __('Password') }}</label>
                                <div class="control">
                                    <input id="password" class="input @error('password') is-danger @enderror"
                                        type="password" name="password" required autocomplete="new-password">
                                </div>
                                @error('password')
                                    <p class="help is-danger"><strong>{{ $message }}</strong></p>
                                @enderror
                            </div>

                            <div class="field is-expanded">
                                <label class="label"
                                    for="password-confirm">{{ __('Confirm Password') }}</label>
                                <div class="control">
                                    <input id="password-confirm" class="input @error('password') is-danger @enderror"
                                        type="password" name="password_confirmation"
                                        value="{{ old('email') }}" required required
                                        autocomplete="new-password">
                                </div>
                                @error('password')
                                    <p class="help is-danger"><strong>{{ $message }}</strong></p>
                                @enderror
                            </div>
                        </div>



                        <div class="field is-grouped">
                            <div class="control">
                                <button type="submit"
                                    class="button is-primary">{{ __('Register') }}</button>
                            </div>
                        </div>


                    </form>

                    <hr />

                    <div class="buttons">
                        <a href="{{ route('login.social','linkedin') }}"
                            class="button is-linkedin">
                            <span class="icon is-large">
                                <i class="mdi mdi-24px mdi-linkedin"></i>
                            </span>
                            <span>
                                Register with LinkedIn
                            </span>
                        </a>
                        <a href="{{ route('login.social','apple') }}"
                            class="button is-apple">
                            <span class="icon is-large">
                                <i class="mdi mdi-24px mdi-apple"></i>
                            </span>
                            <span>
                                Register with Apple
                            </span>
                        </a>
                        <a href="{{ route('login.social','google') }}"
                            class="button is-google">
                            <span class="icon is-large">
                                <i class="mdi mdi-24px mdi-google"></i>
                            </span>
                            <span>
                                Register with Google
                            </span>
                        </a>
                    </div>
                </div>


            </div>
        </div>

    </div>
</div>

@endsection
