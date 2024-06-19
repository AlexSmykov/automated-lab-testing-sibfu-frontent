import {
  Directive,
  Input,
  OnInit,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

import { ERoles } from 'src/app/core/role/role.enum';
import { RoleService } from 'src/app/core/role/role.service';
import { environment } from 'src/environments/environment';

@Directive({
  selector: '[appRequiredRole]',
})
export class RequiredRoleDirective implements OnInit {
  @Input({ required: true }) appRequiredRole!: ERoles;

  constructor(
    private roleService: RoleService,
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {}

  ngOnInit(): void {
    if (
      this.roleService.currentRole === this.appRequiredRole ||
      !environment.production
    ) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }
}
