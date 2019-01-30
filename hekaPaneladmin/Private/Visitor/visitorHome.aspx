<%@ Page Title="" Language="C#" MasterPageFile="~/Private/Visitor/visitor.Master" AutoEventWireup="true" CodeBehind="visitorHome.aspx.cs" Inherits="hekaPaneladmin.Private.Visitor.visitorHome" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
     <script src='https://api.tiles.mapbox.com/mapbox-gl-js/v0.51.0/mapbox-gl.js'></script>
    <link href='https://api.tiles.mapbox.com/mapbox-gl-js/v0.51.0/mapbox-gl.css' rel='stylesheet' />
    <style>
        #map {
            position: absolute;
            top: 150px;
            bottom: 150px;
            left: 100px;
            right: 100px;
            width: 70%;
        }  
    </style>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <h1>Admin Panel</h1>
       <div id='map'></div>
    <script src="progressMap.js"></script>

</asp:Content>
