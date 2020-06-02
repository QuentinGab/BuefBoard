@extends('layouts.app')

@section('content')
<div class="section">
    <div class="container">
        <div class="columns is-centered">
            <div class="column is-6">
                <div class="box">
                    <form method="POST" action="{{ route('login') }}">
                        @csrf
                        <div class="field">
                            <label for="email" class="label">Email</label>
                            <div class="control has-icons-left">
                                <input id="email" class="input @error('email') is-danger @enderror" type="email"
                                    name="email" placeholder="platon@gmail.com" value="{{ old('email') }}" required
                                    autocomplete="email" autofocus>
                                <span class="icon is-small is-left">
                                    <i class="fas fa-envelope"></i>
                                </span>
                            </div>
                            @error('email')
                            <p class="help is-danger"><strong>{{ $message }}</strong></p>
                            @enderror
                        </div>

                        <div class="field">
                            <label class="label" for="password">Mot de passe</label>
                            <div class="control has-icons-left">
                                <input id="password" class="input @error('password') is-danger @enderror"
                                    type="password" name="password" value="{{ old('email') }}" required
                                    autocomplete="current-password" autofocus>
                                <span class="icon is-small is-left">
                                    <i class="fas fa-envelope"></i>
                                </span>
                            </div>
                            @error('password')
                            <p class="help is-danger"><strong>{{ $message }}</strong></p>
                            @enderror
                        </div>

                        <div class="field">
                            <div class="control">
                                <label class="checkbox" for="remember">
                                    <input type="checkbox" name="remember" id="remember"
                                        {{ old('remember') ? 'checked' : '' }}>
                                    {{ __('Remember Me') }}
                                </label>
                            </div>
                        </div>

                        <div class="field is-grouped">
                            <div class="control">
                                <button type="submit" class="button is-link">{{ __('Login') }}</button>
                            </div>
                        </div>

                        <div class="field">
                            @if (Route::has('password.request'))
                            <a class="" href="{{ route('password.request') }}">
                                {{ __('Forgot Your Password?') }}
                            </a>
                            @endif
                        </div>

                    </form>

                </div>
            </div>
        </div>

    </div>

</div>
@endsection
