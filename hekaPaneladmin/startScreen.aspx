<%@ Page Title="" Language="C#" MasterPageFile="~/main.Master" AutoEventWireup="true" CodeBehind="startScreen.aspx.cs" Inherits="hekaPaneladmin.startScreen" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <center><img src="Images/hekaIcon.png"  width="150px" /></center>
    <center><h5><b>Heka Admin Panel</h5></b></center>
    
    <br />
    <br />
    <h1 style="font-size:70px ; text-align:center"><b> Welcome to the Site</b> </h1>
    <br />
    <h4 style="font-size:35px;text-align:center"><b>Who are you?</b> </h4>
    <br />
    <div align="center">
    <asp:Button ID="btn_admin" Width="150px" Height="40px" runat="server" Text="Admin" OnClick="btn_admin_Click"  />
    <asp:Button ID="btn_visitor" Width="150px" Height="40px" runat="server" Text="Visitor" OnClick="btn_visitor_Click" />
        </div>
</asp:Content>



