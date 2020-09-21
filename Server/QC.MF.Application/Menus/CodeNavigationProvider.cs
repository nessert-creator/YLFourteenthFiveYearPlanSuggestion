using Abp.Application.Navigation;
using Abp.Localization;
using QC.MF.Authorization;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


namespace QC.MF.Menus
{
    public class CodeNavigationProvider : NavigationProvider
    {
        public const string MenuGroupName = "Code";
        public override void SetNavigation(INavigationProviderContext context)
        {
            var menu = new MenuDefinition(MenuGroupName, new FixedLocalizableString("主菜单"));
            context.Manager.Menus["Code"] = menu;
            menu
                .AddItem(
                    new MenuItemDefinition("系统管理", L("系统管理"))
                        .AddItem(
                            new MenuItemDefinition(
                                "organization",
                                L("组织机构"),
                                url: "/organization",
                                icon: "",
                                requiredPermissionName: PermissionNames.Pages_Administration_OrganizationUnits_Lookup
                                )
                            )
                        .AddItem(
                            new MenuItemDefinition(
                                "role",
                                L("角色"),
                                url: "/role",
                                icon: "",
                                requiredPermissionName: PermissionNames.Pages_Administration_Roles_Lookup
                                )
                            )
                        .AddItem(
                            new MenuItemDefinition(
                                "user",
                                L("用户"),
                                url: "/user",
                                icon: "",
                                requiredPermissionName: PermissionNames.Pages_Administration_Users_Lookup
                                )
                            )
                        .AddItem(
                            new MenuItemDefinition(
                                "notice",
                                L("活动公告"),
                                url: "/notice",
                                icon: "",
                                requiredPermissionName: PermissionNames.Pages
                            )
                        )
                        .AddItem(
                            new MenuItemDefinition(
                                "topic",
                                L("留言主题"),
                                url: "/topic",
                                icon: "",
                                requiredPermissionName: PermissionNames.Pages
                            )
                        )
                        .AddItem(
                            new MenuItemDefinition(
                                "messager",
                                L("留言者"),
                                url: "/messager",
                                icon: "",
                                requiredPermissionName: PermissionNames.Pages
                            )
                        )
                        .AddItem(
                            new MenuItemDefinition(
                                "message",
                                L("留言内容"),
                                url: "/message",
                                icon: "",
                                requiredPermissionName: PermissionNames.Pages
                            )
                        )
                        .AddItem(
                            new MenuItemDefinition(
                                "auditLog",
                                L("审计日志"),
                                url: "/auditLog",
                                icon: "",
                                requiredPermissionName: PermissionNames.Pages_Administration_AuditLogs
                                )
                            )
                        .AddItem(
                            new MenuItemDefinition(
                                "configuration",
                                L("设置"),
                                url: "/configuration",
                                icon: "",
                                requiredPermissionName: PermissionNames.Pages_Administration_Settings
                                )
                            )
                    );
        }

        private static ILocalizableString L(string name)
        {
            return new LocalizableString(name, MFConsts.LocalizationSourceName);
        }
    }
}
