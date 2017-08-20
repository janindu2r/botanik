<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Default.aspx.cs" Inherits="_Default" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <link href="css/test1.css" rel='stylesheet' type='text/css' />
    <link href="https://fonts.googleapis.com/css?family=Raleway" rel="stylesheet" />
    <title>BOTANIK</title>
        <link rel="stylesheet" href="css/custom.css" />

    <script type="text/javascript">
        // Set the date we're counting down to
        var countDownDate = new Date("Jan 5, 2018 15:37:25").getTime();

        // Update the count down every 1 second
        var x = setInterval(function () {

            // Get todays date and time
            var now = new Date().getTime();

            // Find the distance between now an the count down date
            var distance = countDownDate - now;

            // Time calculations for days, hours, minutes and seconds
            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);

            // Display the result in an element with id="demo"
            document.getElementById("demo").innerHTML = days + "d " + hours + "h "
            + minutes + "m " + seconds + "s ";

            // If the count down is finished, write some text 
            if (distance < 0) {
                clearInterval(x);
                document.getElementById("demo").innerHTML = "EXPIRED";
            }
        }, 1000);

    </script>
</head>
<body class="animate-me">
    <form id="form1" runat="server">
        <div>
            <div class="middle">
                <img src="img/Botanik Logo1.png" width="293" height="174"/>
            </div>
            <div class="middle">
                <p style="padding-top: 450px; color:white">FOLLOW US ON &nbsp;&nbsp;<a href="https://www.facebook.com/botanikbistrobar" target="_blank"><i class="fa fa-facebook" style="font-size: 25px; color:white"></i></a>&nbsp;&nbsp;&nbsp;<a href="https://www.instagram.com/botanikbistrobar/" target="_blank"><i class="fa fa-instagram" style="font-size: 25px; color:white"></i></a></p>
            </div>
            <div class="middleall">
               <asp:TextBox ID="tbone" runat="server" CssClass="input-sm" BackColor="Transparent" BorderColor="White" BorderStyle="Solid" BorderWidth="1px" placeholder="Enter your email to subscribe to our newsletter" ForeColor="White" Width="300px" Font-Size="12px"></asp:TextBox><br /><asp:Button ID="btnone" runat="server" Text="Subscribe" CssClass="button-submit" Font-Size="12px" BackColor="#808080" BorderStyle="Solid" OnClick="btnone_Click" /><br />
                <asp:Label ID="lblone" runat="server" Text="" ForeColor="White" Font-Size="12px"></asp:Label>
            </div>
            <div>
                <p class="bottomleft">All Copyrights Reserved. BOTANIK © 2017</p>
            </div>
            <div>
                <p class="bottomright" >Terms & Conditions | Privacy Policy</p>
            </div>
        </div>
    </form>
</body>
</html>
