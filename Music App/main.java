import javax.swing.*;
import java.awt.*;
import java.io.*;
class Main{
    Image background = Toolkit.getDefaultToolkit().getImage("C:\\icons\\background.png");
    Image appicon = Toolkit.getDefaultToolkit().getImage("C:\\icons\\note.png");
    JFrame frame = new JFrame();
    //CONSTRUCTOR 'Main'
    /*creating the main page using a jframe and adding a background to it*/
    public Main() throws IOException {
        frame.setContentPane(new JPanel() {
            @Override
            public void paintComponent(Graphics g){
                super.paintComponent(g);
                g.drawImage(background, 400, 700, null);
            }
        });
        /*setting the frame */
        frame.setBackground(Color.GREEN);
        frame.setSize(400, 700);
        frame.setTitle("musIT.ai");
        frame.setIconImage(appicon);
        frame.setVisible(true);
        /*Creating a button */
        JButton button = new JButton();
        button.setBounds(200, 350, 30, 30);
        button.setBackground(Color.red);
        button.setBorder(null);
        frame.add(button);
            }
    public static void main(String args[]) throws Exception {
           new Main();
        }
}