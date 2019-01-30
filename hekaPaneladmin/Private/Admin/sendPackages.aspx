<%@ Page Title="" Language="C#" MasterPageFile="~/Private/Admin/admin.Master" AutoEventWireup="true" CodeBehind="sendPackages.aspx.cs" Inherits="hekaPaneladmin.Private.Admin.sendPackages" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <div class=" content">
                   
                    <asp:Label ID="lblLocation" runat="server" Text="Location:"></asp:Label>
                     <asp:DropDownList ID="ddlLocations" runat="server">
                         <asp:ListItem></asp:ListItem>
                         <asp:ListItem></asp:ListItem>
                         <asp:ListItem></asp:ListItem>
                         <asp:ListItem></asp:ListItem>
                    </asp:DropDownList>
                    <br />
                    <asp:Label ID="lblQnty" runat="server" Text="Quantity:"></asp:Label>
                    <br />
                    <asp:TextBox ID="tbQuantity" runat="server"></asp:TextBox>
                   
                    <br />
                    <br />
                    <asp:Button ID="btnSubmit" runat="server" Text="Submit"  />
                   
                    
                    <asp:Label ID="lblErrorMessage" runat="server"></asp:Label>
                   
                    
                </div>
</asp:Content>
