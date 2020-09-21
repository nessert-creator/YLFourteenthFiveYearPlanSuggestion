namespace QC.MF.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class Message1 : DbMigration
    {
        public override void Up()
        {
            CreateIndex("dbo.Messages", "MessagerId");
            CreateIndex("dbo.Messages", "TopicId");
            AddForeignKey("dbo.Messages", "MessagerId", "dbo.Messagers", "Id", cascadeDelete: true);
            AddForeignKey("dbo.Messages", "TopicId", "dbo.Topics", "Id", cascadeDelete: true);
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Messages", "TopicId", "dbo.Topics");
            DropForeignKey("dbo.Messages", "MessagerId", "dbo.Messagers");
            DropIndex("dbo.Messages", new[] { "TopicId" });
            DropIndex("dbo.Messages", new[] { "MessagerId" });
        }
    }
}
