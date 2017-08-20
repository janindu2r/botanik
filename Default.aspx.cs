using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Net.Mail;
using System.Net;
using System.Text.RegularExpressions;

public partial class _Default : System.Web.UI.Page
{
    public string mailID = "";

    protected void Page_Load(object sender, EventArgs e)
    {
        if (IsPostBack)
        {
            this.clear();
        }

    }

    public void clear()
    {
        lblone.Text = "";
        this.tbone.Text = "";
    }
 
            
    protected void btnone_Click(object sender, EventArgs e)
    {
        try
        {
            if ((!this.tbone.Text.Equals("")))
            {
                mailID = this.tbone.Text;
                //Check Email Id is valid
                if (IsValidEmailId(tbone.Text))
                {
                    this.sendEmailId();
                    this.lblone.Text = "Subscription Successfull";
                    this.tbone.Text = "";
                }
                else
                {
                    this.lblone.Text = "Invalid e-mail";
                }
            }
            else
            {
                this.lblone.Text = "Please enter valid e-mail";
            }
        }
        catch (Exception ex)
        {
            //Response.Redirect("index.aspx#price");
            Response.Write(ex.Message.ToString());
        }
    }

    //This function returns true if the emailid matches the pattern. Else it will return false
    private bool IsValidEmailId(string InputEmail)
    {
        //Regex To validate Email Address
        Regex regex = new Regex(@"^([\w\.\-]+)@([\w\-]+)((\.(\w){2,3})+)$");
        Match match = regex.Match(InputEmail);
        if (match.Success)
            return true;
        else
            return false;
    }

    /// <summary>
    /// Calling the Subscriber Email ID
    /// </summary>
    public void sendEmailId()
    {
        MailMessage message = new MailMessage();
        string msg = string.Empty;


        MailAddress fromAddress = new MailAddress(this.mailID);
        message.From = fromAddress;
        message.To.Add(new MailAddress("earlbumotad@gmail.com"));
        message.Bcc.Add(new MailAddress("tharangasw@gmail.com"));
        message.Subject = "New Email Subscription - www.botanik.lk"; ;
        message.IsBodyHtml = true;
        message.Body = "<table width='800' border='0' cellspacing='0' cellpadding='0'>  <tr>    <td align='left' valign='top'>Hi,</td> </tr>  <tr>    <td align='left' valign='top'> Please Subscribe me to the Newsletter of www.botanik.lk </td>  </tr>  <tr>    <td align='left' valign='top'>&nbsp;</td>  </tr>  <tr>    <td align='left' valign='top'><strong>Details</strong></td>  </tr>  <tr>    <td align='left' valign='top'><table width='517' border='0' cellpadding='0' cellspacing='1' bordercolor='#CCCCCC' bgcolor='#CCCCCC'> <tr> <td align='left' valign='top' bgcolor='#FFFFFF'>E-mail Address </td>        <td width='17' align='center' valign='top' bgcolor='#FFFFFF'>:</td>        <td align='left' valign='top' bgcolor='#FFFFFF'>" + this.mailID + "</td>      </tr>                     </table></td>  </tr>  <tr>    <td align='left' valign='top'>&nbsp;</td>  </tr>          <tr>    <td align='left' valign='top'>&nbsp;</td>  </tr>  <tr>    <td align='left' valign='top'>Thank You.</td>  </tr></table>";

        //Configure an SmtpClient to send the mail.            
        SmtpClient client = new SmtpClient("relay-hosting.secureserver.net", 25);
        client.DeliveryMethod = SmtpDeliveryMethod.Network;
        client.Credentials = CredentialCache.DefaultNetworkCredentials;
        client.DeliveryMethod = SmtpDeliveryMethod.Network;

        client.Send(message);
    }
}