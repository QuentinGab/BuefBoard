@extends('layouts.app')

@section('content')
<div class="hero is-link is-fullheight">
    <div class="hero-body">
        <div class="container">
            <div class="columns">
                <div class="column is-6"></div>
                <div class="column is-6">
                    <div class="box">
                        <form method="POST" action="{{ route('register') }}">
                            @csrf
                            <div class="field">
                                <label for="name" class="label">{{ __('Name') }}</label>
                                <div class="control has-icons-left">
                                    <input id="name" class="input @error('name') is-danger @enderror" type="name"
                                        name="name" placeholder="Platon" value="{{ old('name') }}" required
                                        autocomplete="name" autofocus>
                                    <span class="icon is-small is-left">
                                        <i class="fas fa-envelope"></i>
                                    </span>
                                </div>
                                @error('name')
                                <p class="help is-danger"><strong>{{ $message }}</strong></p>
                                @enderror
                            </div>

                            <div class="field">
                                <label for="email" class="label">{{ __('E-Mail Address') }}</label>
                                <div class="control has-icons-left">
                                    <input id="email" class="input @error('email') is-danger @enderror" type="email"
                                        name="email" placeholder="platon@gmail.com" value="{{ old('email') }}" required
                                        autocomplete="email">
                                    <span class="icon is-small is-left">
                                        <i class="fas fa-envelope"></i>
                                    </span>
                                </div>
                                @error('email')
                                <p class="help is-danger"><strong>{{ $message }}</strong></p>
                                @enderror
                            </div>

                            <div class="field">
                                <label class="label" for="password">{{ __('Password') }}</label>
                                <div class="control has-icons-left">
                                    <input id="password" class="input @error('password') is-danger @enderror"
                                        type="password" name="password" required autocomplete="new-password">
                                    <span class="icon is-small is-left">
                                        <i class="fas fa-pass"></i>
                                    </span>
                                </div>
                                @error('password')
                                <p class="help is-danger"><strong>{{ $message }}</strong></p>
                                @enderror
                            </div>

                            <div class="field">
                                <label class="label" for="password-confirm">{{ __('Confirm Password') }}</label>
                                <div class="control has-icons-left">
                                    <input id="password-confirm" class="input @error('password') is-danger @enderror"
                                        type="password" name="password_confirmation" value="{{ old('email') }}" required
                                        required autocomplete="new-password">
                                    <span class="icon is-small is-left">
                                        <i class="fas fa-pass"></i>
                                    </span>
                                </div>
                                @error('password')
                                <p class="help is-danger"><strong>{{ $message }}</strong></p>
                                @enderror
                            </div>



                            <div class="field is-grouped">
                                <div class="control">
                                    <button type="submit" class="button is-link">{{ __('Register') }}</button>
                                </div>
                            </div>


                        </form>

                    </div>
                </div>
            </div>

        </div>
    </div>
</div>

@endsection
