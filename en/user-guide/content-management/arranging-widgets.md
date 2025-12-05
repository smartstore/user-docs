# Arranging Widgets

Widgets in Smartstore are provided by plugins and render certain output or even invisible content like scripts into the frontend of your shop. Widgets are a public representation of a plugin with which your customers can interact. The areas where widgets are displayed are specified in the plugin depending on the purpose of the widget (e.g. scripts have to be rendered in the head section of an HTML document). Examples of widgets are analytics tools or seals of approval. You can activate and configure widgets by navigating to **CMS > Widgets**. With the button **Activate/Deactivate**, you can turn the widget and thereby the public display in your shop on or off. The **Configure** button takes you to the configuration area of the corresponding plugin. If there are multiple widgets defined for the same *Widget Zone*, they will be displayed in the order they are shown in the backend. You can define a different display order by arranging the widgets in the backend via Drag & Drop. 

![](./attachments/widgets.png)

## Example 1 (Tracking Widget)

Imagine you want to track user statistics. If you're not using a widget specifically built to accomplish this task automatically, you will need to place a script into the head section of your site. If you want to track e-commerce statistics (e.g. orders), you will need to insert certain variables dynamically like the actual order ID or the order amount into this script and place it on the corresponding site, which in this case will be the *Order Completed Page*. A widget (such as Google Analytics) automatically inserts the necessary values into the script and renders it in the right place. 

## Example 2 (Seal of Approval Widget)

Imagine you want to give your customers the opportunity to write reviews about the experience they'd had at your shop, and you want to use the service of a reputable company that's known and trusted by most people. A widget created for this task automatically renders a button on the *Order Completed Page* to transfer your customers to the site of this company, perhaps placing the results of the ratings on your homepage. 

## Widget Zones

Widget zones are placeholders that allow you to inject the output of widgets and HTML blocks anywhere in your shop. Every single building block in Smartstore is richly populated with widget zones, enabling you to have maximum freedom to place the output of a widget anywhere you like, even though many widgets determine the widget zone in which they need to be rendered by themselves. You can also use widget zones to place your own HTML content anywhere you want in the shop. For more information about placing your own HTML content anywhere in your shop, read the topic [Managing Pages & Topics](../content-management/managing-pages-topics.md). For more information about widget zones and a complete list of all widget zones, read the topic  [Widget Zones](https://smartstore.atlassian.net/wiki/display/SMNET/Widget+Zones) .