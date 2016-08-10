import {Component} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Conversation} from '../../shared/model';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/pluck';

@Component({
  moduleId: module.id,
  templateUrl: 'conversation.html',
  styleUrls: ['conversation.css']
})
export class ConversationCmp {
  conversation: Observable<Conversation>;

  constructor(private route: ActivatedRoute, private router: Router) {
    this.conversation = route.data.pluck<Conversation>('conversation');
  }

  goUp(): void {
    const folder = this.route.snapshot.parent.params['folder'];
    this.router.navigate(["/", folder]);
  }
}