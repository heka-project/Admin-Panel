using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace hekaPaneladmin
{
    public partial class adminLogin : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

        }

        protected void btnLogin_Click(object sender, EventArgs e)
        {
            string pwd = tbPassword.Text;
            string emailAddr = tbEmail.Text;

            if (emailAddr == "admin@np.edu.sg" && pwd == "passAdmin")
            {
                Session["UserType"] = "Admin";
                Response.Redirect("~/Private/Admin/adminHome.aspx");

            }
            else
            {
                lblErrorMessage.Text = "Login Failed";
            }
        }
    }
}