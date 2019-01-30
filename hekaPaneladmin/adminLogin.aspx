<%@ Page Title="" Language="C#" MasterPageFile="~/main.Master" AutoEventWireup="true" CodeBehind="adminLogin.aspx.cs" Inherits="hekaPaneladmin.adminLogin" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
     <link href="styles/login.css" rel="stylesheet" />
    <br /><br /><br /><br /><br /><br /><br /><br />
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-7 col-lg-8  content">
                <div >
                    <h1>
                        <span>
                            lol
                        </span>Heka</h1>
                    <h2>Admin Panel</h2>

                </div>

            </div>
             <div class=" col-sm-12 col-md-5 col-lg-4">
                <div class=" content">
                   
                    <asp:Label ID="lblEmail" runat="server" Text="Email:"></asp:Label>
                   
                    <br />
                    <asp:TextBox ID="tbEmail" runat="server"></asp:TextBox>
                    <asp:RegularExpressionValidator ID="revEmail" runat="server" ControlToValidate="tbEmail" ErrorMessage="Invalid Email!" ValidationExpression="\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*"></asp:RegularExpressionValidator>
                    <br />
                    <asp:Label ID="lblPass" runat="server" Text="Password:"></asp:Label>
                    <br />
                    <asp:TextBox ID="tbPassword" runat="server" TextMode="Password"></asp:TextBox>
                   
                    <br />
                    <br />
                    <asp:Button ID="btnLogin" runat="server" Text="Log In" OnClick="btnLogin_Click" />
                   
                    
                    <asp:Label ID="lblErrorMessage" runat="server"></asp:Label>
                   
                    
                </div>
            </div>
            <br />
        </div>
    </div>

</asp:Content>
