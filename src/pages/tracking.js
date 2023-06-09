export default function Tracking() {
    return (
      <div class="container">
        <article class="card">

          <header class="card-header"> My Orders / Tracking </header>
          <div class="card-body">
            <h6>Order ID: OD45345345435</h6>
            <article class="card">
              <div class="card-body row">
                <div class="col">
                  {" "}
                  <strong>Estimated Delivery time:</strong> <br />
                  29 nov 2019{" "}
                </div>
                <div class="col">
                  {" "}
                  <strong>Shipping BY:</strong> <br /> BLUEDART |{" "}
                  <i class="fa fa-phone"></i> +1598675986{" "}
                </div>
                <div class="col">
                  {" "}
                  <strong>Status:</strong> <br /> Picked by the courier{" "}
                </div>
                <div class="col">
                  {" "}
                  <strong>Tracking #:</strong> <br /> BD045903594059{" "}
                </div>
              </div>
            </article>
            <div class="track">
              <div class="step active">
                {" "}
                <span class="icon">
                  {" "}
                  <i class="fa fa-check"></i>{" "}
                </span>{" "}
                <span class="text">Order confirmed</span>{" "}
              </div>
              <div class="step active">
                {" "}
                <span class="icon">
                  {" "}
                  <i class="fa fa-user"></i>{" "}
                </span>{" "}
                <span class="text"> Picked by courier</span>{" "}
              </div>
              <div class="step">
                {" "}
                <span class="icon">
                  {" "}
                  <i class="fa fa-truck"></i>{" "}
                </span>{" "}
                <span class="text"> On the way </span>{" "}
              </div>
              <div class="step">
                {" "}
                <span class="icon">
                  {" "}
                  <i class="fa fa-box"></i>{" "}
                </span>{" "}
                <span class="text">Ready for pickup</span>{" "}
              </div>
            </div>
            <hr />
          </div>
        </article>
      </div>
    );
}