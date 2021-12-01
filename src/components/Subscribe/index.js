export default function Subcribe() {
    return (
        <div className="container">
        <div className="col-md-4 col-md-offset-4 col-sm-6 col-sm-offset-3 col-xs-10 col-xs-offset-1">
          <form action="#" method="get">
            <h4>Cras pellentesque suscipit nulla, sit amet luctus purus. Donec non erat eros.</h4>
            <fieldset>
              <input name="email" type="text" id="email" onfocus="if(this.value == 'Your Email...') { this.value = ''; }" onblur="if(this.value == '') { this.value = 'Your Email...';}" defaultValue="Your Email..." required />
            </fieldset>
            <fieldset>
              <button type="submit" id="form-submit" className="btn">Subscribe Now!</button>
            </fieldset>
          </form>
        </div>
      </div>
    )
}
