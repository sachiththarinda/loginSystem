import React from 'react'

export default function RegisterForm(props) {

    let{handleSubmit,
        setUsername,
        setEmail,
        setPassword,
        setPasswordCheck
    } = props.registerState 

    return (
            <div className="col-sm-7 bg-color align-self-center">
                <div className="form-section">
                    <div className="title">
                        <h3>Create a new account</h3>
                    </div>
                    <div className="login-inner-form">
                        <form method="POST"  onSubmit={handleSubmit}>
                        <div className="form-group form-box">
                                <input type="text" id="username" onChange={e =>setUsername(e.target.value)} className="input-text" placeholder="Username" />
                                <i class="far fa-user"></i>
                            </div>

                            <div className="form-group form-box">
                                <input type="text" id="email" onChange={e =>setEmail(e.target.value)} className="input-text" placeholder="Email" />
                                <i class="far fa-envelope"></i>
                            </div>

                            <div className="form-group form-box">
                                <input type="password" id="password" onChange={e =>setPassword(e.target.value)} className="input-text" placeholder="Password" />
                                <i class="fas fa-lock"></i>
                            </div>

                            <div className="form-group form-box">
                                <input type="password" id="passwordCheck" onChange={e =>setPasswordCheck(e.target.value)} className="input-text" placeholder="Re-enter password" />
                                <i class="fas fa-lock"></i>
                            </div>

                            <div className="form-group">
                                <button className="btn primary-btn">
                                    Register
                                </button>
                            </div>


                        </form>
                    </div>
                </div>
            </div>
    )
}
